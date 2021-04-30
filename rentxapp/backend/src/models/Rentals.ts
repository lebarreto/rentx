import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
  } from 'typeorm';
import Cars from './Cars';
import Users from './Users';
    
@Entity('rentals')
class Rentals {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @Column()
    client_id: string;

    @Column()
    car_id: string;

    @OneToOne(type => Cars, cars => {
        cars.name,
        cars.brand
    })
    @JoinColumn({ name: 'car_id' })
    car: Cars;

    @OneToOne(() => Users)
    @JoinColumn({ name: 'client_id' })
    client: Users;
}

export default Rentals;