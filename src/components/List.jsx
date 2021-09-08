export default function List({ list, Component, ...compProps }) {
  const Items = list.map((item) => <Component key={item.id} item={item} {...compProps}/>);
  return <ul>{Items}</ul>;
}
