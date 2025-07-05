package com.alan.orcamentoapi.repository;

import com.alan.orcamentoapi.entity.Orcamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrcamentoRepository extends JpaRepository<Orcamento, Long> {
}
