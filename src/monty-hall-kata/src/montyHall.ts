export function switchDoor(doors: string[], playerChoice: number, hostReveals: number): string {
    const remainingDoor = [0, 1, 2].find(d => d !== playerChoice && d !== hostReveals) as number;
    return doors[remainingDoor];
  }
  
  export function stayDoor(doors: string[], playerChoice: number): string {
    return doors[playerChoice];
  }
