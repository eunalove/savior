package kr.ac.baekgoo.springboot.dto;

import lombok.Data;

import java.util.List;

@Data
public class CharacterDto {
    private String child;
    private List<Long> job;
    private List<Long> family;
}
