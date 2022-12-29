type SvgProps = {
  size?: number;
  color?: string;
  direction?: 'top' | 'bottom' | 'left' | 'right';
};
const ArrowIcon = ({ size, color, direction }: SvgProps) => {
  switch (direction) {
    case 'top':
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size ? size : '18.029'}
            height={size ? size : '18.044'}
            viewBox="0 0 20.474 10.96"
          >
            <path
              d="M18.974,10.21a.748.748,0,0,1-.53-.219L9.487,1.059.53,9.991a.75.75,0,0,1-1.061,0,.75.75,0,0,1,0-1.061L8.957-.531a.75.75,0,0,1,1.059,0L19.5,8.929a.75.75,0,0,1-.53,1.281Z"
              transform="translate(0.75 0.75)"
              fill={color ? color : '#459582'}
            />
          </svg>
        </>
      );
    case 'bottom':
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size ? size : '18.029'}
            height={size ? size : '18.044'}
            viewBox="0 0 12.133 7.052"
          >
            <path
              id="Vector"
              d="M5.067,6.052a1,1,0,0,1-.706-.292L-.706.708a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0L5.067,3.64,9.427-.708a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414L5.773,5.76A1,1,0,0,1,5.067,6.052Z"
              transform="translate(1 1)"
              fill={color ? color : '#205448'}
            />
          </svg>
        </>
      );
    case 'left':
      return (
        <>
          <svg
            id="iconspace_Down_25px"
            xmlns="http://www.w3.org/2000/svg"
            width="26.667"
            height="26.667"
            viewBox="0 0 26.667 26.667"
          >
            <path id="Path" d="M0,0H26.667V26.667H0Z" fill="none" />
            <g id="angle-down" transform="translate(10.538 19.462) rotate(-90)">
              <path
                id="Path-2"
                data-name="Path"
                d="M10.929.31a1.067,1.067,0,0,0-1.5,0L5.6,4.086,1.82.31a1.067,1.067,0,1,0-1.5,1.515L4.838,6.348a1.067,1.067,0,0,0,1.515,0l4.576-4.523a1.067,1.067,0,0,0,0-1.515Z"
                transform="translate(0 0)"
                fill="#919eab"
              />
            </g>
          </svg>
        </>
      );
    case 'right':
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size ? size : '18.029'}
            height={size ? size : '18.044'}
            viewBox="0 0 7.133 12.296"
            style={{ transform: 'rotate(180deg)' }}
          >
            <path
              id="Vector"
              d="M5.133,11.3A1,1,0,0,1,4.425,11L-.708,5.854a1,1,0,0,1,0-1.412L4.425-.706a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414L1.412,5.148,5.841,9.59A1,1,0,0,1,5.133,11.3Z"
              transform="translate(1 1)"
              fill={color ? color : '#c4c4c4'}
            />
          </svg>
        </>
      );
    default:
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size ? size : '18.029'}
            height={size ? size : '18.044'}
            viewBox="0 0 18.029 18.044"
          >
            <path
              d="M17.6,7.948a1.5,1.5,0,0,0-2.133,0l-4.943,4.958V1.5a1.5,1.5,0,0,0-3,0v11.4L2.575,7.948A1.509,1.509,0,0,0,.442,10.081l7.512,7.512a1.5,1.5,0,0,0,.5.316,1.412,1.412,0,0,0,1.142,0,1.5,1.5,0,0,0,.5-.316L17.6,10.081a1.5,1.5,0,0,0,0-2.133Z"
              transform="translate(0 18.044) rotate(-90)"
              fill={color ? color : '#919191'}
            />
          </svg>
        </>
      );
  }
};

export default ArrowIcon;
