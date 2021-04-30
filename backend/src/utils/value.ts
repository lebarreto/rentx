export default class Utils {
    value(start_date: Date, end_date: Date) {
        const start = new Date(start_date)
        const end = new Date(end_date)

        const difference = end.getTime() - start.getTime();
        const days = Math.ceil(difference / (1000 * 3600 * 24))

        return days;
    }
}