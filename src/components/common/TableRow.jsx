export default function NutritionTable({ item }) {
  const { title, amount, unit = "g", percent } = item;
  return (
    <tr>
      <td>
        <span>{title}</span> {amount}
        {unit}
      </td>
      <td className="main-text">{percent}%</td>
    </tr>
  );
}
