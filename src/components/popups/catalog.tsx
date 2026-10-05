import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DialogClose } from "@/components/ui/dialog";
import { Categories } from "@/shared/lib/interfaces";

// "Catalog" popup — previously a static, non-clickable Steam-style genre list
// that didn't correspond to any real category in the backend. Now lists the
// real seeded categories; picking one closes the popup and opens the full
// catalog page pre-filtered to that genre.
const Catalog: React.FC = () => {
    const [genres, setGenres] = useState<Categories[]>([]);

    useEffect(() => {
        fetch('http://localhost:5049/api/Categories')
            .then((res) => res.ok ? res.json() : [])
            .then((data: Categories[]) => setGenres(data))
            .catch((error) => console.log('Fetch genres error:', error));
    }, []);

    return (
        <div className="px-8 pt-5 pb-6 rounded-3xl bg-card2 max-w-auto">
            <div className="text-heading-3 font-bold font-manrope leading-7">Жанри</div>
            <div className="mt-4 flex flex-wrap gap-3">
                {genres.map((genre) => (
                    <DialogClose key={genre.id} asChild>
                        <Link
                            to={`/catalog?genre=${genre.id}`}
                            className="px-4 py-2 rounded-full bg-cardLight12 hover:bg-cardLight25 text-typography text-block-2 font-artifakt transition"
                        >
                            {genre.name}
                        </Link>
                    </DialogClose>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
