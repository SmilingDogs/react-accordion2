import AccordionItem from "./components/AccordionItem/AccordionItem";
import { accordionData } from "./data";

const App = () => {
  const accordionItems = accordionData.map((item) => (
    <AccordionItem key={item.id} {...item} />
  ));

  return (
    <>
      <h1>FAQ</h1>
      <div className="accordion">{accordionItems}</div>
    </>
  );
};

export default App;
