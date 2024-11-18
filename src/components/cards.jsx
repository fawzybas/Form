import { useSelector  } from "react-redux";
 
 

export default function Cards() {
 

  // تكتب كل القيم ال محتاج  تستوردها بين {}
const {name} = useSelector((state) => state.counter);

  // في حاله استخدام اي  on click
  // const dispatch = useDispatch();




  // if (isLoading) {
  //   return <h1 className=" text-3xl">Loading ... </h1>;
  // }

  // if (error) {
  //   return <h1>error ... </h1>;
  // }

  return (
    <>
      {/* <button onClick={() => dispatch(increment())}> click </button> */}
      <h1 className=" text-3xl text-red-300">name {name} </h1>

      {/* {data && data.length > 0 ? (
        data.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[350px] h-[300px] m-5 rounded-lg text-black p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white"
            >
              <img className="rounded-t-lg" src={item.image} alt="img" />
              <h5 className="mb-2 text-xl font-medium leading-tight">
                {item.title}
              </h5>
            </div>
          );
        })
      ) : (
        <p>No data available</p>
      )} */}
    </>
  );
}
