import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
  
@Entity('users')
class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    email: string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    admin: boolean;

    @Expose({ name: 'image_url' })
    getAvatarUrl(): string | null {
        if (!this.image) {
            return null;
        }

        return `${process.env.BACKEND_URL}/files/${this.image}`;
    }
}

export default Users;