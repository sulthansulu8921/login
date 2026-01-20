import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", a: 400, b: 700 },
  { month: "Feb", a: 300, b: 900 },
  { month: "Mar", a: 350, b: 500 },
  { month: "Apr", a: 420, b: 800 },
  { month: "May", a: 280, b: 900 },
  { month: "Jun", a: 300, b: 600 },
  { month: "Jul", a: 340, b: 620 },
  { month: "Aug", a: 460, b: 950 },
  { month: "Sep", a: 500, b: 750 },
  { month: "Oct", a: 420, b: 600 },
  { month: "Nov", a: 480, b: 700 },
  { month: "Dec", a: 450, b: 720 },
];

export default function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} barGap={-18}>
        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Bar dataKey="b" fill="#e7e6ff" radius={[10, 10, 0, 0]} />
        <Bar dataKey="a" fill="#6c63ff" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
