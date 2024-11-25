import platforms from "../data/platforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const usePlatforms = () => ({ data: platforms});
export default usePlatforms;