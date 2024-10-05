import LeftNavigationBar from "./components/Nav/left-nav-bar";
import NavigationBar from "./components/Nav/nav-bar";

export default function App() {
  return (
    <header className="">
      <NavigationBar />
      <p className="mt-24">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
        explicabo. Nesciunt consequuntur numquam veritatis officia animi illum
        ipsam velit eos molestias. Ut quia, inventore soluta praesentium quos
        voluptatem repellendus dolorum error aperiam dicta, quibusdam neque
        aspernatur velit quaerat eveniet impedit nostrum voluptatibus quo!
        Blanditiis quidem expedita excepturi molestiae quo corrupti corporis
        reiciendis possimus facere. Blanditiis reiciendis tenetur laudantium vel
        magni, harum at nihil saepe ab sit incidunt ducimus, ea, pariatur cumque
        beatae accusamus dolore! Consequatur enim saepe quod, dolores officiis
        facilis officia quae itaque minima laudantium est consequuntur pariatur
        totam repellendus quisquam reprehenderit ipsum ducimus, et excepturi
        dicta maxime. Molestiae.
      </p>
    </header>
  );
}

const compose = function(...functions) {
return functions.length
  // let result = [];
  //   for (let i = functions.length - 1; i >= 0; i--) {
  //     console.log(i)
  //     //result = functions[i](result);
  //     console.log(functions)
  //     return functions
  //   }
    //return result;
  // return function(x) {
  //   let num = 0
  //     for (let index = 0; index <= functions.length; index++) {
  //       console.log(index)
  //       return num+ functions[index](x)
  //     }
  // }
 
};


//  const fn = compose(12,14,47)
console.log(compose(12,14,47))