import type { Datapoint } from "~/interface";

const Notes = ({ props }: { props: Datapoint }) => {
  const { notes } = props;
  return (
    <td className="dropdown dropdown-left dropdown-hover w-full">
      <label
        tabIndex={0}
        className="btn-ghost btn-xs btn-circle btn ml-5 text-info"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </label>
      <div
        tabIndex={0}
        className="dropdown-content card compact rounded-box w-64 bg-base-100 shadow"
      >
        <textarea
          className="textarea-bordered textarea-primary textarea textarea-lg w-64"
          placeholder={notes}
        />
      </div>
    </td>
  );
};
export default Notes;
