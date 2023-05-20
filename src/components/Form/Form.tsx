const Form = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <label htmlFor="my-modal-5" className="modal cursor-pointer">
        <label className="modal-box relative">
          <form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10">
                <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 "
                    >
                      Card
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent p-2 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="outcome"
                      className="block text-sm font-medium leading-6 "
                    >
                      Outcome
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        className="block w-full rounded-md border-0 p-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="" disabled selected></option>
                        <option>Approved</option>
                        <option>Denied</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 "
                    >
                      Reddit Username
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
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
                        name="fico"
                        id="fico"
                        min="300"
                        max="850"
                        className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
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
                        id="country"
                        name="country"
                        className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="" disabled selected></option>
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
                    </div>
                  </div>
                  <div className=" sm:col-span-3">
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium leading-6 "
                    >
                      Application Date
                    </label>

                    <div className="relative max-w-sm ">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3"></div>
                      <input
                        type="date"
                        className="block w-full cursor-pointer rounded-lg border p-2 "
                        placeholder="Select date"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="x/3"
                      className="block text-sm font-medium leading-6 "
                    >
                      x/3 months
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="x3"
                        id="x3"
                        min="1"
                        max="10"
                        className="block w-full rounded-md border-0 p-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="x/6"
                      className="block text-sm font-medium leading-6 "
                    >
                      x/6 months
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="x6"
                        id="x6"
                        min="1"
                        max="10"
                        className="block w-full rounded-md border-0 p-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="x/12"
                      className="block text-sm font-medium leading-6 "
                    >
                      x/12 months
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="x12"
                        id="x12"
                        min="1"
                        max="10"
                        className="block w-full rounded-md border-0 p-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
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
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 p-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </label>
      </label>
    </>
  );
};
export default Form;
