/** @format */

export function convertWindSpeed(speedInMetersPerSecond: number): string {
    const speedInKilometerPerHour = speedInMetersPerSecond * 3.6; // Conversion from m/s to km/h
    return `${speedInKilometerPerHour.toFixed(0)}km/h`;
}