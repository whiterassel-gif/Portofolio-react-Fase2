import ProjectCard from "../component/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Website Portofolio Pribadi",
    desc: "Aplikasi SPA yang menampilkan profil, daftar proyek, dan formulir kontak.",
    image: "/image/project-portofolio.png",
    tech: ["React", "React Router", "CSS"],
    githubUrl: "https://github.com/username/portofolio-react",
    demoUrl: "https://portofolio-saya.vercel.app",
  },
{
    id: 2,
    title: "Aplikasi Catatan Anak Sekolah",
    desc: "Aplikasi Untuk Menyimpan Catatan dan Gambar Anak Sekolah ",
    // Cukup gunakan string path yang mengarah ke folder public
    image: "/images/catatan.jpeg",
    tech: ["PHP, MYSQL, HTML, CSS, JAVASCRIPT"],
    // Ganti menjadi githubUrl (U besar)
    githubUrl: "https://github.com/Dzulkokonut/Tugas-sekolah",
},

  // tambahkan proyek lain di sini mengikuti pola yang sama
];

function Projects() {
  return (
    <section className="projects">
      <h2>Proyek Saya</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
export default Projects;