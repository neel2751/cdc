import React from "react";

const Announcement = () => {
  return (
    // <div className="max-w-full sm:px-0 px-4 mx-auto sticky top-0">
    //   <div className="bg-blue-600 bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 text-center">
    //     <p className="me-2 inline-block font-bold text-transparent bg-gradient-to-tr from-green-600 to-orange-600 bg-clip-text">
    //       GALA Dinner & Music{" "}
    //       <span className="text-white text-sm">
    //         Sunday, 14th July, 2024 at 4:00 PM - 9:00 PM. Limited seats
    //         available
    //       </span>
    //     </p>
    //     <a
    //       className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none"
    //       href="https://www.eventbrite.co.uk/e/business-fair-networking-impartial-advice-gala-dinner-music-tickets-911672124867?aff=ebdsshcopyurl&utm-source=cp&utm-term=listing&utm-campaign=social&utm-medium=discovery&utm-content=attendeeshare"
    //       target="blank"
    //     >
    //       Reserve a Spot
    //       <svg
    //         className="flex-shrink-0 size-4"
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         stroke-width="2"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //       >
    //         <path d="m9 18 6-6-6-6" />
    //       </svg>
    //     </a>
    //   </div>
    // </div>
    <div className="lg:px-8 sm:pb-6 sm:px-6 sm:justify-center sm:flex top-40 inset-x-0  pointer-events-none z-50">
      <div className="sm:pr-3.5 sm:pl-4 sm:py-3 rounded-xl px-6 bg-neutral-800 gap-x-6 justify-between items-center flex pointer-events-auto">
        <p className="text-white leading-6 text-sm">
          <a
            href="https://www.eventbrite.co.uk/e/business-fair-networking-impartial-advice-gala-dinner-music-tickets-911672124867?aff=ebdsshcopyurl&utm-source=cp&utm-term=listing&utm-campaign=social&utm-medium=discovery&utm-content=attendeeshare"
            target="_blank"
            rel="noreferrer"
          >
            <strong>GALA Dinner & Music</strong>
            <svg
              viewBox="0 0 2 2"
              className="w-0.5 h-0.5 inline mx-2"
              fill="currentColor"
              aria-hidden="true"
            >
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            Sunday, 14th July, 2024 at 4:00 PM - 9:00 PM. Limited seats
            available
            <span className="ms-1" aria-hidden="true">
              →
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Announcement;
