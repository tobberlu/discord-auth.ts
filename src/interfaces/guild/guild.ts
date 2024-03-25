import {Role} from "../permissions/role";
import {Emoji} from "../emoji/emoji";
import {GuildFeatures} from "../../enums/guild/guildFeatures";
import {WelcomeScreenStructure} from "./welcomeScreen/welcomeScreenStructure";
import {Sticker} from "../sticker/sticker";

export interface Guild {
    id: string;
    name: string;
    icon?: string;
    icon_hash?: string;
    splash?: string;
    discovery_splash?: string;
    owner?: boolean;
    owner_id: string;
    permissions?: string;
    region?: string;
    afk_channel_id?: string;
    afk_timeout: number;
    widget_enabled?: boolean;
    widget_channel_id?: string;
    verification_level: number;
    default_message_notifications: number;
    explicit_content_filter: number;
    roles: Role[];
    emojis: Emoji[];
    features: GuildFeatures;
    mfa_level: number;
    application_id?: string;
    system_channel_id?: string;
    system_channel_flags: number;
    max_presences?: number;
    max_members: number;
    vanity_url_code?: string;
    description?: string;
    banner?: string;
    premium_tier: number;
    premium_subscription_count?: number;
    preferred_locale: string;
    public_updates_channel_id?: string;
    max_video_channel_users?: number;
    max_stage_video_channel_users?: number;
    approximate_member_count?: number;
    approximate_presence_count?: number;
    welcome_screen?: WelcomeScreenStructure;
    nsfw_level: number;
    stickers?: Sticker[];
    premium_progress_bar_enabled: boolean;
    safety_alerts_channel_id?: string;
}