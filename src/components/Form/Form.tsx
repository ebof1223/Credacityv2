import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import { AppData } from "~/context/AppData";
import * as Yup from "yup";

const Form = () => {
  const { current, datapoints, setDatapoints } = useContext(AppData);
  useEffect(() => {
    if (current) {
      formik.values.cardName = current.name;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const formik = useFormik({
    initialValues: {
      cardName: current?.name,
      finalResult: "",
      Username: "",
      creditScore: 350,
      income: "",
      applicationDate: "",
      x3: "",
      x6: "",
      x12: "",
      notes: "",
    },
    validationSchema: Yup.object().shape({
      finalResult: Yup.string().required("Required"),
      Username: Yup.string()
        .min(3, "Must be 3 characters or more")
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      creditScore: Yup.number()
        .min(300, "Enter valid FICO Score")
        .max(850, "Enter valid FICO Score")
        .required("Required"),
      income: Yup.string().required("Required"),
      applicationDate: Yup.date()
        .max(new Date(), "Invalid date")
        .typeError("please enter a valid date")
        .required("Required")
        .min("1969-11-13", "Date is too early"),
      x3: Yup.number(),
      x6: Yup.number(),
      x12: Yup.number(),
    }),
    onSubmit: (values, { resetForm }) => {
      const origin = values.applicationDate;
      const year = origin.slice(0, 4);

      const dateWithoutYear = origin.slice(5);

      const month = dateWithoutYear.slice(0, dateWithoutYear.indexOf("-"));

      const day = month.slice(1);

      const date = `${month}/${day}/${year}`;

      values.applicationDate = date;
      const a = values.cardName ?? "";
      const b = datapoints[a];
      const c = b && [...b, values];
      // @ts-expect-error unable to find ts soln
      datapoints[values.cardName] = c;
      setDatapoints({ ...datapoints });
      resetForm({
        values: {
          cardName: current?.name,
          finalResult: "",
          Username: "",
          creditScore: 0,
          income: "",
          applicationDate: "",
          x3: "",
          x6: "",
          x12: "",
          notes: "",
        },
      });
    },
  });
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <label htmlFor="my-modal-5" className="modal  pointer-events-none ">
        <div className="modal-box relative ">
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10">
                <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="cardName"
                      className="block text-sm font-medium leading-6 "
                    >
                      Card
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="cardName"
                          id="cardName"
                          disabled
                          value={current ? current.name : ""}
                          onChange={formik.handleChange}
                          className="block flex-1 border-0 bg-transparent p-2 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="finalResult"
                      className="block text-sm font-medium leading-6 "
                    >
                      Outcome
                    </label>
                    <div className="mt-2">
                      <select
                        id="finalResult"
                        name="finalResult"
                        className="block w-full rounded-md border-0 p-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={formik.handleChange}
                        value={formik.values.finalResult}
                      >
                        <option value="" disabled></option>
                        <option>Approved</option>
                        <option>Denied</option>
                      </select>
                      {formik.errors.finalResult ? (
                        <p className="mt-1 text-xs">
                          {formik.errors.finalResult}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="Username"
                      className="block text-sm font-medium leading-6 "
                    >
                      Reddit Username
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="Username"
                        id="Username"
                        className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                        onChange={formik.handleChange}
                        value={formik.values.Username}
                      />
                      {formik.errors.Username ? (
                        <p className="mt-1 text-xs">{formik.errors.Username}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="fico"
                      className="block text-sm font-medium leading-6 "
                    >
                      Fico Score
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="creditScore"
                        id="creditScore"
                        className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={formik.handleChange}
                        value={formik.values.creditScore}
                      />
                      {formik.errors.creditScore ? (
                        <p className="mt-1 text-xs">
                          {formik.errors.creditScore}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="income"
                      className="block text-sm font-medium leading-6 "
                    >
                      Income
                    </label>
                    <div className="mt-2">
                      <select
                        id="income"
                        name="income"
                        className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={formik.handleChange}
                        value={formik.values.income}
                      >
                        <option value="" disabled></option>
                        <option>$10,000 - $20,000</option>
                        <option>$20,000 - $30,000</option>
                        <option>$30,000 - $40,000</option>
                        <option>$40,000 - $50,000</option>
                        <option>$50,000 - $60,000</option>
                        <option>$60,000 - $70,000</option>
                        <option>$70,000 - $80,000</option>
                        <option>$80,000 - $90,000</option>
                        <option>$90,000 - $100,000</option>
                        <option>$100,000 - $125,000</option>
                        <option>$150,000+</option>
                      </select>
                      {formik.errors.income ? (
                        <p className="mt-1 text-xs">{formik.errors.income}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-control sm:col-span-3">
                    <label
                      htmlFor="applicationDate"
                      className="block text-sm font-medium leading-6 "
                    >
                      Application Date
                    </label>
                    <div className="form-control relative max-w-sm">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3"></div>
                      <input
                        type="date"
                        id="applicationDate"
                        name="applicationDate"
                        className="block w-full cursor-pointer rounded-lg border p-2 "
                        placeholder="Select date"
                        onChange={formik.handleChange}
                        value={formik.values.applicationDate}
                      />
                      {formik.errors.applicationDate ? (
                        <p className="mt-1 text-xs">
                          {formik.errors.applicationDate}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="x3"
                      className="block text-sm font-medium leading-6 "
                    >
                      x/3 months
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="x3"
                        id="x3"
                        className="block w-full rounded-md border-0 p-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={formik.handleChange}
                        value={formik.values.x3}
                      />
                      {formik.errors.finalResult ? (
                        <p className="mt-1 text-xs">{formik.errors.x3}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="x6"
                      className="block text-sm font-medium leading-6 "
                    >
                      x/6 months
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="x6"
                        id="x6"
                        className="block w-full rounded-md border-0 p-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={formik.handleChange}
                        value={formik.values.x6}
                      />
                      {formik.errors.x6 ? (
                        <p className="mt-1 text-xs">{formik.errors.x6}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="x12"
                      className="block text-sm font-medium leading-6 "
                    >
                      x/12 months
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="x12"
                        id="x12"
                        className="block w-full rounded-md border-0 p-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={formik.handleChange}
                        value={formik.values.x12}
                      />
                      {formik.errors.x12 ? (
                        <p className="mt-1 text-xs">{formik.errors.x12}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="notes"
                className="block text-sm font-medium leading-6 "
              >
                Notes
              </label>
              <div className="mt-2">
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="block w-full rounded-md border-0 p-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={formik.handleChange}
                  value={formik.values.notes}
                />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <label
                className="cursor-pointer text-sm font-semibold leading-6"
                htmlFor="my-modal-5"
              >
                Cancel
              </label>
              <button
                onSubmit={() => formik.handleSubmit}
                type="submit"
                className="btn rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {!Object.keys(formik.errors).length ? (
                  <label htmlFor="my-modal-5">Submit</label>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </label>
    </>
  );
};
export default Form;
