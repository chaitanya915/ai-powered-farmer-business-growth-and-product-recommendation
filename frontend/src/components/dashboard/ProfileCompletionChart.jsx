import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function ProfileCompletionChart({
  percentage = 0,
}) {
  const safePercentage = Math.min(
    100,
    Math.max(0, Number(percentage) || 0)
  );

  const data = [
    {
      name: "Completed",
      value: safePercentage,
    },
    {
      name: "Remaining",
      value: 100 - safePercentage,
    },
  ];

  return (
    <div className="relative h-64 w-full">

      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={95}
            paddingAngle={3}
            startAngle={90}
            endAngle={-270}
          >
            <Cell fill="#15803d" />
            <Cell fill="#e5e7eb" />
          </Pie>

          <Tooltip
            formatter={(value) => [
              `${Number(value).toFixed(0)}%`,
              "Profile",
            ]}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-3xl font-bold text-green-700">
          {safePercentage}%
        </p>

        <p className="text-xs font-medium text-gray-500">
          Complete
        </p>
      </div>

    </div>
  );
}