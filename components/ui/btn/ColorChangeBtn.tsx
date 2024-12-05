interface IcolorChangeBtn {
  color: "red" | "blue";
}

const ColorChangeBtn = ({ color }: IcolorChangeBtn) => {
  if (color === "red") {
    return (
      <>
        <button className="border-2 border-black m-1 rounded-md p-1 bg-red-500">
          色変更
        </button>
      </>
    );
  } else if (color === "blue") {
    return (
      <>
        <button className="border-2 border-black m-1 rounded-md p-1 bg-blue-500">
          色変更
        </button>
      </>
    );
  }
};
export default ColorChangeBtn;
