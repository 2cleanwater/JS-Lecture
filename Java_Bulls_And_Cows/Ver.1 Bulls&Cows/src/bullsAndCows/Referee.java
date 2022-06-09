package bullsAndCows;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.util.Random;

public class Referee {
	static BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	
	//입력받은 숫자와 비교함
	//시스템 숫자와 비교하여 결과를 도출
	//입력받은 숫자가 0000일 경우 경기를 중단시킴
	//승리할 때까지 던진 볼의 갯수를 카운트함.
	public int[] referee(int[] catchBalls) throws IOException {
		boolean rfbool = false;
		boolean pybool = false;
		int[] score = {0,0};
		Referee rf = new Referee();
		System.out.println("공을 던져주세요.");
		while(!rfbool) {
			int[] playerBalls = rf.ThrownBalls();
			int sum = 0;
			int mul = 1;
			for(int i = 0;i<playerBalls.length;i++) {
				sum += playerBalls[i];
				// 플레이어가 입력한 숫자들의 합이 0이면 종료
				mul = playerBalls[i]*mul;
				// 플레이어 숫자중 0이 포함되어있으면 출력
			}
			pybool = rf.checkDup(playerBalls);
			//플레이어의 숫자가 중복이면 true, 중복이 아니면 false
			
			if(sum==0) {
				System.out.println("게임을 종료하겠습니다.");
				score[0] = 5;
				rfbool = true;
			}else if(mul == 0) {
				System.out.println("0을 입력하실 수 없습니다. 다시 던지세요");
			}else {
				if(pybool) {
					System.out.println("중복된 숫자가 있습니다. 다시 던지세요");
				}else {
					score = rf.rules(playerBalls, catchBalls);
					rfbool = true;
				}
			}
		}
		System.out.println(Arrays.toString(score));
		return score;
	}
	
	public int[] ThrownBalls() throws IOException{
		// br.readline을 입력받아
		// String[]을 int[]로 변환하여
		// int[]를 리턴함
		String input = bf.readLine();
		String[] inputAry = input.split("");
		int[] playerBalls = new int[inputAry.length];
		for(int i = 0;i<inputAry.length;i++) {
			playerBalls[i] = Integer.parseInt(inputAry[i]);
			System.out.print(playerBalls[i]);
		}
		System.out.println();
		return playerBalls;
	}
	
	public int[] CatchBalls() {
		//랜덤한 4개의 숫자를 출력 (중복제거)
		int[] catchballs = new int [4];
		Random r = new Random();
		int i = 0;
		outerloop:
		while(i<catchballs.length) {
			int num = r.nextInt(9) + 1;
			for(int j= 0; j< catchballs.length; j++) {
				if(catchballs[j]==num) {
					continue outerloop;
				}
			}
			catchballs[i] = num;
			System.out.print(catchballs[i]);
			i++;
		}
		System.out.println();
		return catchballs;
	}
	
	public boolean checkDup(int[] balls) {
		// int[]를 입력
		// 중복이 있는지 확인
		// bool을 출력
		int[] checker = balls.clone();
		int i = 0;
		boolean bool = false;
		outerloop:
		while(i<balls.length-1) {
			for(int j = i+1;j<balls.length;j++) {
				if(checker[i] == balls[j]) {
					bool = true;
					break outerloop;
					}
				}
			i++;
			}
		return bool;
	}
	
	public int[] rules(int[]playerballs, int[] catchballs) {
		
		int[] score = {0,0};
		// score[0]은 스트라이크 [1]은 볼
		for(int i=0;i<playerballs.length;i++) {
			for(int j=0;j<catchballs.length;j++) {
				if(playerballs[i]==catchballs[j]) {
					if(i==j) {
						score[0]++;
					}else {
						score[1]++;
					}
				}
			}
		}
		System.out.printf("%d스트라이크, %d볼입니다!",score[0],score[1]);
		return score;
	}
	
}
