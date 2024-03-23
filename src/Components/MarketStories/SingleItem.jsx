import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
const SingleItem = () => {
  return (
    // This Is The Main Div Of Single Item
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        {/* This Is The Image Component Comes From Nextjs */}
        <Image width={1000} height={1000} src="/sunset.jpg" alt="/sunset.jpg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">The Coldest Sunset</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          reiciendis, quaerat molestiae ipsam blanditiis eum mollitia rem et
          ratione nobis?
        </p>
      </div>
    </div>
  );
};

export default SingleItem;
