import { LoggerService } from '../utils/logger/logger.service';
import { PostsDaoService } from '../database/daos/posts/posts.dao.service';
import { UserDaoService } from '../database/daos/users/user.dao.service';
import { PostService } from '../posts/post.service';
import { RefreshTokensDaoService } from '../database/daos/refreshTokens/refreshTokens.dao.service';
export declare class CronjobService {
    private readonly loggerService;
    private readonly userDaoService;
    private readonly postService;
    private readonly postsDaoService;
    private readonly refreshTokensDaoService;
    constructor(loggerService: LoggerService, userDaoService: UserDaoService, postService: PostService, postsDaoService: PostsDaoService, refreshTokensDaoService: RefreshTokensDaoService);
    metricAlerts(): Promise<void | import("axios").AxiosResponse<any, any>>;
    closeOutdatedPosts(): Promise<(void | import("axios").AxiosResponse<any, any>)[]>;
    cleanUpExpiredRefreshTokens(): import("objection").QueryBuilder<import("../database/models/refreshToken.model").RefreshTokenModel, number>;
}