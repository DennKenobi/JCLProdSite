// hooks/useScrollSpy.ts
import { useEffect, useState } from 'react';

export function useScrollSpy(
    sectionRefs: { id: string; ref: React.RefObject<HTMLElement> }[],
    offset = 0,
) {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            let current: string | null = null;
            for (const { id, ref } of sectionRefs) {
                const element = ref.current;
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (
                        scrollPosition >= top &&
                        scrollPosition < top + height
                    ) {
                        current = id;
                        break;
                    }
                }
            }

            setActiveId(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Run on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionRefs, offset]);

    return activeId;
}
