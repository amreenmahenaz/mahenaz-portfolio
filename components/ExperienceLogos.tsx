"use client"
import Image from "next/image"

export default function ExperienceLogos() {
  const companies = [
    { name: "Procyon Technostructure", src: "/companies/procyon.png" },
    { name: "Morgan Stanley", src: "/companies/morganstanley.png" },
    { name: "Accenture", src: "/companies/accenture.png" },
    { name: "San Jose State University", src: "/companies/san jose state University.png" },
    { name: "CBIT", src: "/companies/cbit.jpeg" },
  ]

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800">
        Experience & Education
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {companies.map((company) => (
          <div key={company.name} className="flex flex-col items-center space-y-2">
            <Image
              src={company.src}
              alt={company.name}
              width={100}
              height={100}
              className="rounded-lg shadow-md object-contain"
            />
            <p className="text-sm text-gray-700 font-medium">{company.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
