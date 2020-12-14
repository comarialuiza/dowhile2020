import { Resolver } from "type-graphql";
import Video from "./Video";
import VideoSchema from '../../model/VideoSchema';

@Resolver(Video)
class VideoResolver {
    async videos() {
        const videos = await VideoSchema.find();
        return videos;
    }
}

export default VideoResolver;