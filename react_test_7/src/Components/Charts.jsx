// Let's draw different types of charts using rechart
import { Line, LineChart, CartesianGrid, BarChart, Bar, Pie, PieChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';


function Charts() {

    const studentsMarks = [
        { id: 1, math: 30, english: 20, physics: 15 },
        { id: 2, math: 40, english: 30, physics: 20 },
        { id: 3, math: 55, english: 30, physics: 75 },
        { id: 4, math: 65, english: 60, physics: 80 },
        { id: 5, math: 50, english: 70, physics: 90 },
        { id: 6, math: 70, english: 80, physics: 95 },
        { id: 7, math: 80, english: 95, physics: 100 }
    ]

    return (
        <div className=' grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-20 '>
            {/* here,
                    type="monotone" => smooth curve.
                    stroke => color of the line. 
                    strokeWidth => width of the line.
                    strokeDasharray="5 3"  => grid with dashed lines (5px dash, 3px gap)
                    <Tooltip />  =>  Shows data points on hover.
                    cx="50%" cy="50%"   => the diagram is in the center of the box
            */}

            <LineChart width={300} height={300} data={studentsMarks} className='bg-green-50'>
                <Line type="monotone" dataKey="math" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="english" stroke="#4CAF50" strokeWidth={2} />
                <Line type="monotone" dataKey="physics" stroke="#FF9800" strokeWidth={2} />
            </LineChart>


            <LineChart width={300} height={300} data={studentsMarks}>
                <CartesianGrid strokeDasharray="5 3" />
                <XAxis dataKey="id" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="math" stroke="#4CAF50" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="english" stroke="#FF9800" strokeDasharray="3 3" />
            </LineChart>


            <BarChart width={300} height={300} data={studentsMarks}>
                <XAxis dataKey="id" />
                <YAxis />
                <Legend />
                <Bar dataKey="math" fill="#8884d8" />
            </BarChart>

            <PieChart width={300} height={300}>
                <Pie data={studentsMarks} dataKey="math" cx="50%" cy="50%" outerRadius={100} fill="#FF9800" />
            </PieChart>

        </div>
    )
}
export default Charts;