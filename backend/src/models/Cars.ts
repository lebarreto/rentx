import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { Expose } from 'class-transformer';
import uploadConfig from '../config/multer';

@Entity('cars')
class Cars {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column()
    daily_value: number;

    @Column()
    image?: string;

    @Expose({ name: 'image' })
    getImageUrl(): string | null {
        if (!this.image) {
            return null;
        }

        switch (uploadConfig.driver) {
            case 'disk':
              return `${process.env.BACKEND_URL}/files/${this.image}`;
            default:
              return null;
          }
    }
}

export default Cars;