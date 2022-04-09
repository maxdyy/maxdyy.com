interface ITiltWrapper {
  children: React.ReactNode;
  scale?: number;
  degrees?: number;
  perspective?: number;
  easing?: string;
  speed?: number;
  reset?: boolean;
  className?: string;
}

export default ITiltWrapper;
