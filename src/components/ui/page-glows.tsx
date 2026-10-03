// Blurred teal blobs from the design backgrounds. Positions are the shape's
// top-left corner on the 1920px-wide frame; `large` uses the wider blur.
export interface Glow {
    left: number;
    top: number;
    large?: boolean;
}

const PageGlows: React.FC<{ glows: Glow[] }> = ({ glows }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {glows.map((glow, i) => {
            // How far the blur extends past the shape in each SVG.
            const bleed = glow.large ? 600 : 500;
            return (
                <img
                    key={i}
                    src={glow.large ? '/src/assets/svg/glow-large.svg' : '/src/assets/svg/glow.svg'}
                    alt=""
                    className="absolute max-w-none"
                    style={{ left: `calc(50% - 960px + ${glow.left - bleed}px)`, top: glow.top - bleed }}
                />
            );
        })}
    </div>
);

export default PageGlows;
