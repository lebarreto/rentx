import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { Expose } from 'class-transformer';

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

    @Expose({ name: 'image_url' })
    getImageUrl(): string | null {
        if (!this.image) {
            return null;
        }

        return `${process.env.BACKEND_URL}/files/${this.image}`;
    }
}

export default Cars;