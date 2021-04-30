import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
import Cars from './Cars';
    
@Entity('details')
class Details {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    icon: string;

    @Column()
    car_id: string;

    @ManyToOne(() => Cars)
    @JoinColumn({ name: 'car_id' })
    car: Cars;
}

export default Details;