export default function JobSubmit({ params }) {
  return (
    // <!-- Card Section -->
    <div class="max-w-4xl sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Card --> */}
      <div class="bg-white rounded-xl shadow p-4 sm:p-7">
        <form>
          {/* <!-- Section --> */}
          <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
            <div class="sm:col-span-12">
              <h2 class="text-lg font-semibold text-gray-800">
                Submit your application
              </h2>
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-3">
              <label
                for="af-submit-application-full-name"
                class="inline-block text-sm font-medium text-gray-500 mt-2.5"
              >
                Full name
              </label>
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-9">
              <div class="sm:flex">
                <input
                  id="af-submit-application-full-name"
                  type="text"
                  class="py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                />
                <input
                  type="text"
                  class="py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                />
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-3">
              <label
                for="af-submit-application-email"
                class="inline-block text-sm font-medium text-gray-500 mt-2.5"
              >
                Email
              </label>
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-9">
              <input
                id="af-submit-application-email"
                type="email"
                class="py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              />
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-3">
              <div class="inline-block">
                <label
                  for="af-submit-application-phone"
                  class="inline-block text-sm font-medium text-gray-500 mt-2.5"
                >
                  Phone
                </label>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-9">
              <input
                id="af-submit-application-phone"
                type="text"
                class="py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              />
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-3">
              <div class="inline-block">
                <label
                  for="af-submit-application-current-company"
                  class="inline-block text-sm font-medium text-gray-500 mt-2.5"
                >
                  Current Company
                </label>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-9">
              <input
                id="af-submit-application-current-company"
                type="text"
                class="py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              />
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Section --> */}

          {/* <!-- Section --> */}
          <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
            <div class="sm:col-span-12">
              <h2 class="text-lg font-semibold text-gray-800">Profile</h2>
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-3">
              <label
                for="af-submit-application-resume-cv"
                class="inline-block text-sm font-medium text-gray-500 mt-2.5"
              >
                Resume/CV
              </label>
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-9">
              <label for="af-submit-application-resume-cv" class="sr-only">
                Choose file
              </label>
              <input
                type="file"
                name="af-submit-application-resume-cv"
                id="af-submit-application-resume-cv"
                class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
              file:bg-transparent file:border-0
              file:bg-gray-100 file:me-4
              file:py-2 file:px-3"
              />
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-3">
              <div class="inline-block">
                <label
                  for="af-submit-application-bio"
                  class="inline-block text-sm font-medium text-gray-500 mt-2.5"
                >
                  Personal summary
                </label>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-9">
              <textarea
                id="af-submit-application-bio"
                class="py-2 px-3 block w-full border-gray-200 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                rows="6"
                placeholder="Add a cover letter or anything else you want to share."
              ></textarea>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Section --> */}

          {/* <!-- Section --> */}
          <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
            <div class="sm:col-span-12">
              <h2 class="text-lg font-semibold text-gray-800">Links</h2>
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-3">
              <label
                for="af-submit-application-linkedin-url"
                class="inline-block text-sm font-medium text-gray-500 mt-2.5"
              >
                LinkedIn URL
              </label>
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-9">
              <input
                id="af-submit-application-linkedin-url"
                type="text"
                class="py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              />
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Section --> */}

          {/* <!-- Section --> */}
          <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
            <div class="sm:col-span-12">
              <h2 class="text-lg font-semibold text-gray-800">
                Before sending your application, please let us know...
              </h2>
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-3">
              <label
                for="af-submit-application-desired-salary"
                class="inline-block text-sm font-medium text-gray-500 mt-2.5"
              >
                Desired salary
              </label>
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-9">
              <input
                id="af-submit-application-desired-salary"
                type="text"
                class="py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              />
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-3">
              <label
                for="af-submit-application-available-start-date"
                class="inline-block text-sm font-medium text-gray-500 mt-2.5"
              >
                Available start date
              </label>
            </div>
            {/* <!-- End Col --> */}

            <div class="sm:col-span-9">
              <input
                id="af-submit-application-available-start-date"
                type="text"
                class="py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              />
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Section --> */}

          {/* <!-- Section --> */}
          <div class="py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
            <h2 class="text-lg font-semibold">Submit application</h2>
            <p class="mt-3 text-sm text-gray-600">
              In order to contact you with future jobs that you may be
              interested in, we need to store your personal data.
            </p>
            <p class="mt-2 text-sm text-gray-600">
              If you are happy for us to do so please click the checkbox below.
            </p>

            <div class="mt-5 flex">
              <input
                type="checkbox"
                class="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                id="af-submit-application-privacy-check"
              />
              <label
                for="af-submit-application-privacy-check"
                class="text-sm text-gray-500 ms-2"
              >
                Allow us to process your personal information.
              </label>
            </div>
          </div>
          {/* <!-- End Section --> */}

          <button
            type="button"
            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Submit application
          </button>
        </form>
      </div>
      {/* <!-- End Card --> */}
    </div>
  );
}
