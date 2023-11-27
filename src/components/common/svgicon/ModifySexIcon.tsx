export const ModifySexIcon = ({ isMale , strokeColor }) => {
  return (
    <div>
      {isMale ? (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.83335 14.8333C9.68682 14.8333 12 12.5201 12 9.66667C12 6.8132 9.68682 4.5 6.83335 4.5C3.97988 4.5 1.66669 6.8132 1.66669 9.66667C1.66669 12.5201 3.97988 14.8333 6.83335 14.8333Z" stroke={strokeColor} stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.3334 2.16699L10.6667 5.83366" stroke={strokeColor} stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 2.16699H14.3333V6.50033" stroke={strokeColor} stroke-linecap="round" stroke-linejoin="round"/>
          </svg>}
        </svg>
      ) : (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.9987 11.1663C10.576 11.1663 12.6654 9.077 12.6654 6.49967C12.6654 3.92235 10.576 1.83301 7.9987 1.83301C5.42137 1.83301 3.33203 3.92235 3.33203 6.49967C3.33203 9.077 5.42137 11.1663 7.9987 11.1663Z" stroke={strokeColor} stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 11.167V15.167" stroke={strokeColor} stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 13.167H6" stroke={strokeColor} stroke-linecap="round" stroke-linejoin="round"/>
          </svg>}
        </svg>
      )}
    </div>
  );
};
