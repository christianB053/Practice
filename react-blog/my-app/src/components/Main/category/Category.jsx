import "./category.css";

export default function Category({ category }) {
  console.log(category);

  // const renderingCategory = [];
  // let counter = 1;
  // for (let item of category) {
  //   renderingCategory.push(<dd key={counter}>{item}</dd>);
  //   counter += 1;
  // }

  return (
    <dl className="category">
      <dt className="a11y-hidden">Category</dt>
      {/* {renderingCategory} */}
      {category.map((item, index) => (
        <dd key={index}>{item}</dd>
      ))}
    </dl>
  );
}
