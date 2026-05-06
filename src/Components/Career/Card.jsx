import { Link } from 'react-router-dom';
import { ishlar } from '../../data/ishlar';

const Card = () => {
  return (
    <section className="py-20 bg-[#f4faff] px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {ishlar.map((job) => (
          <div key={job.id} className="bg-white p-12 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-[#1d2130] mb-4">{job.title}</h3>
            <p className="text-gray-500 mb-8">
              {job.location} · {job.type} <br />
              {job.salary} · No equity
            </p>
            <Link 
              to={`/careers/${job.id}`} 
              className="text-[#666dff] font-bold flex items-center gap-2 group"
            >
              Apply Now <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;