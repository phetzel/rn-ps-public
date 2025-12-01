import { Model } from '@nozbe/watermelondb';
import { field, date, readonly } from '@nozbe/watermelondb/decorators';

export default class AppSetting extends Model {
  static table = 'app_settings';

  @field('has_fiction_disclaimer_ack') hasFictionDisclaimerAck!: boolean;
  @field('fiction_disclaimer_acknowledged_at') fictionDisclaimerAcknowledgedAt!: number | null;
  @field('diagnostics_enabled') diagnosticsEnabled!: boolean | null;
  @field('analytics_enabled') analyticsEnabled!: boolean | null;

  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;
}
