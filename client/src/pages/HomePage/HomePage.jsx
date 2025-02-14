import styles from './HomePage';
const arr = [1,2,3]

export default function HomePage({data}) {
  return (
    <div className= {styles.container}>
    {data.map((task) => (
        <div>{task}</div>
          
        ))}
    </div>
  );
}