export default function Home() {
  const users: any = []; // error 발생시키기
  return <>{users[0].name}</>;
}
