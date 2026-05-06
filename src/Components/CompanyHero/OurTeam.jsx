import { Link } from "react-router-dom";
import { teamMembers } from "../../data/odamlar";

const OurTeam = () => {
    return (
        <section className="pt-20 pb-0 bg-white px-10">      <div className="max-w-7xl mx-auto">

            <div className="max-w-3xl mb-16">
                <p className="text-sm font-semibold tracking-widest text-[#1d2130] uppercase mb-4">
                    Meet our team
                </p>
                <h2 className="text-5xl font-bold text-[#1d2130] leading-tight mb-8">
                    Teamwork is the only <br /> way we work
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                    Through True Rich Attended does no end it his mother since real had
                    half every him case in packages enquire we up ecstatic unsatiable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
                {teamMembers.map((member) => (
                    <Link target="_blank" to={`/team/${member.id}`} key={member.id} className="group relative aspect-square overflow-hidden"       >
                        <img src={member.image} className="w-full h-full object-cover" />

                        <div className="absolute inset-0 bg-[#2b3344]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 p-8 flex flex-col justify-end">
                            <h3 className="text-white text-xl font-bold">{member.name}</h3>
                            <p className="text-gray-400 text-sm">{member.title}</p> <br />
                            <div className="flex gap-4">
                                <a href="https://x.com"><img src="./twitter.png" alt="" /></a>
                                <a href="https://www.instagram.com"><img src="./instagram.png" alt="" /></a>
                                <a href="https://uz.linkedin.com/"><img src="./Linkni.png" alt="" /></a>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        </section>
    );
};

export default OurTeam;