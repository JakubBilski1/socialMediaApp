export default function Home() {
  const counter = []
  for (let i = 0; i < 100; i++) {
    counter.push(i)
  }
  return (
    <>
      {counter.map((i) => (
        <div key={i}>{i}</div>
      ))}
    </>
  )
}