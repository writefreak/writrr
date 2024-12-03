import React from "react";

const BodyText = () => {
  return (
    <div className="">
      <div className="flex pt-28 sm:pt-0 flex-col gap-4 sm:gap-8 h-full sm:h-screen">
        <h3 className="text-center sm:text-left text-3xl sm:text-8xl font-raleway">
          Welcome <br />
          To a Fascinating <br className="hidden sm:block" /> World!
        </h3>

        <p className="text-center sm:text-left text-base sm:text-3xl pb-9 font-montserrat font-light">
          Stay informed and inspired <br className="" />
          with the latest tech insights and trends.
        </p>
      </div>

      <img
        src="/images/woman-taking-photo-rural-surroundings.jpg"
        alt=""
        className="w-full rounded-md"
      />

      {/* <div className="flex justify-center pt-16">
        <Link href={"#"}>
          <Button className="sm:hidden rounded-full bg-lime-600">
            <p>View Blogs</p>
          </Button>
        </Link>
      </div> */}
    </div>
  );
};

export default BodyText;
