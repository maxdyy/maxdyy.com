import { useState, useRef, useEffect } from 'react';

import ITiltWrapper from '@interface/tiltWrapper';

// WRAPPER COMPONENT WITH 3D TILT EFFECT
// ===================================== //
// Scale: value to scale the content
// Degrees: value to rotate the content
// Easing: value to ease the rotation
// Speed: value to speed up the rotation
// Reset: reset the rotation on mouseleave
// ===================================== //

const TiltWrapper: React.FC<ITiltWrapper> = ({
  children,
  scale = '1.05',
  degrees = 35,
  perspective = 1000,
  easing = 'cubic-bezier(.03,.98,.52,.99)',
  speed = 1000,
  reset = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  let transitionTimeout = setTimeout(() => false, speed);
  let updateCall = 0;

  const [containerStyle, setContainerStyle] = useState({});
  const [containerData, setContainerData] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });

  useEffect(() => {
    return () => {
      clearTimeout(transitionTimeout);
      cancelAnimationFrame(updateCall);
    };
  }, [transitionTimeout, updateCall]);

  const updateElementPosition = () => {
    if (containerRef.current !== null) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerData({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
        left: rect.left,
        top: rect.top,
      });
    }
  };

  const setTransition = () => {
    clearTimeout(transitionTimeout);
    setContainerStyle({
      ...containerStyle,
      transition: `${speed}ms ${easing}`,
    });

    transitionTimeout = setTimeout(() => {
      setContainerStyle({
        ...containerStyle,
        transition: '',
      });
    }, speed);
  };

  const resetContainer = () => {
    window.requestAnimationFrame(() => {
      setContainerStyle({
        ...containerStyle,
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      });
    });
  };

  const updateContainerStyle = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const x =
      (e.nativeEvent.clientX - containerData.left) / containerData.width;
    const y =
      (e.nativeEvent.clientY - containerData.top) / containerData.height;
    const _x = Math.min(Math.max(x, 0), 1);
    const _y = Math.min(Math.max(y, 0), 1);

    const tiltX = (degrees / 2 - _x * degrees).toFixed(2);
    const tiltY = (_y * degrees - degrees / 2).toFixed(2);

    setContainerStyle({
      ...containerStyle,
      transform: `perspective(${perspective}px) rotateX(${-tiltY}deg) rotateY(${-tiltX}deg) scale3d(${scale}, ${scale}, ${scale})`,
    });
  };

  const onMouseEnter = () => {
    updateElementPosition();
    setContainerStyle({ ...containerStyle, willChange: 'transform' });
    setTransition();
  };

  const onMouseLeave = () => {
    setTransition();
    if (reset) {
      resetContainer();
    }
  };
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.persist();

    if (updateCall !== 0) {
      cancelAnimationFrame(updateCall);
    }

    updateCall = requestAnimationFrame(() => updateContainerStyle(e));
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      className={`${className}`}
      style={containerStyle}
    >
      {children}
    </div>
  );
};

export default TiltWrapper;
