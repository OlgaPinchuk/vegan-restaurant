// Npm files
import TableRow from "./common/TableRow";
import nutritionFacts from "../data/nutritionFacts.json";

export default function NutritionTable({ product }) {
  const nutritionItem = nutritionFacts.find((item) => item.name === product);
  const nutritionRows = nutritionItem.nutrients.map((item) => (
    <TableRow key={item.id} item={item} />
  ));

  return (
    <table className="nutrition-table">
      <caption>Nutrition Facts</caption>
      <tbody>
        <tr>
          <td>Serving size</td>
          <td>{nutritionItem.servingSize}g</td>
        </tr>
        <tr>
          <td>Serving per Container</td>
          <td>{nutritionItem.servingSizePerContainer}g</td>
        </tr>
        <tr>
          <td className="main-text">Amount Per Serving</td>
        </tr>
        <tr className="thick-row-top">
          <td>
            <b>Calories</b> {nutritionItem.calories}
          </td>
          <td>Calories from fat {nutritionItem.caloriesFromFat}</td>
        </tr>
        <tr className="thick-row-top">
          <td colSpan="3" className="main-text align-right">
            % Daily Value
          </td>
        </tr>
        {nutritionRows}
      </tbody>
    </table>
  );
}
