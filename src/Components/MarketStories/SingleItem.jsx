/* eslint-disable @next/next/no-img-element */
const SingleItem = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-full" src="/sunset.jpg" alt="/sunset.jpg" />
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
