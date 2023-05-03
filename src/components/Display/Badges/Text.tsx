const Text = ({ fee }: { fee: string }) => {
  return (
    <div className="tooltip tooltip-bottom" data-tip="Annual Fee">
      <span
        className="
 mr-2 rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300
    "
      >
        {fee}
      </span>
    </div>
  );
};
export default Text;
