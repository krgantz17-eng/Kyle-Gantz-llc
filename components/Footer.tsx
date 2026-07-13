export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-8 text-center text-gray-400">
      <p>
        © {new Date().getFullYear()} Kyle Gantz LLC. All rights reserved.
      </p>

      <p className="mt-2">
        Software Design • Development • Freelance Solutions
      </p>
    </footer>
  );
}