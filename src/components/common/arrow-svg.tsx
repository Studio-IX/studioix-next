import clsx from "clsx";

const ArrowSvg = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.8944 0.553711L0.394884 5.91602L25.2649 26.7844L29.7644 21.4221L4.8944 0.553711ZM25.2645 26.7842L29.764 32.1465L4.89404 53.0149L0.394531 47.6526L25.2645 26.7842Z"
        className={clsx("fill-[#fff] group-hover:fill-[#455CE9]")}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M34.8944 0.553711L30.3949 5.91602L55.2649 26.7844L59.7644 21.4221L34.8944 0.553711ZM55.2645 26.7842L59.764 32.1465L34.894 53.0149L30.3945 47.6526L55.2645 26.7842Z"
        className={clsx("fill-[#fff] group-hover:fill-[#455CE9]")}
      />
    </svg>
  );
};

export default ArrowSvg;
