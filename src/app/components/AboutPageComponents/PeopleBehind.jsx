import React from "react";

const persons = [
  {
    id: 1,
    name: "Kosi",
    role: "CEO",
  },
  {
    id: 2,
    name: "Mercy",
    role: "CTO",
  },
  {
    id: 3,
    name: "Stephen",
    role: "CFO",
  },
  {
    id: 4,
    name: "Timmy",
    role: "TESTER",
  },
];

const PeopleBehind = () => {
  return (
    <div className="px-6 py-10 sm:px-12 md:px-10">
      <h1 className="font-bold text-2xl text-center py-12">The People Behind <span className="text-[#FF6815]">Taskshift</span></h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-8">
        {persons.map((person) => (
          <div className="flex flex-col justify-center items-center" key={person.id} person={person}>
            <div className="bg-[#2B5489] text-white  text-bold pt-14 text-center rounded-full w-32 aspect-square">
                FA
            </div>
            <div className="flex flex-col py-3">
                <h1 className="font-semibold">{person.name}</h1>
            <p className="text-[#AF9A9A]">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleBehind;
